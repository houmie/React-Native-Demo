import RNFS from 'react-native-fs';
import * as zipArchive from 'react-native-zip-archive';
import Share from 'react-native-share';

class Logger {
  static instance = null;

  static getInstance() {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  constructor() {
    this.logsFolderPath = `${RNFS.DocumentDirectoryPath}/logs`;
    this.logFilePath = `${this.logsFolderPath}/app.log`;

    RNFS.mkdir(this.logsFolderPath).catch(error => {
      console.error('Error creating logs folder:', error);
    });
  }

  // Add this method to the Logger class
  // Add this method to the Logger class
  async readLogs() {
    try {
      const logs = await RNFS.readFile(this.logFilePath, 'utf8');
      return logs;
    } catch (error) {
      console.error('Error reading log file:', error);
      return '';
    }
  }

  async _compressLogFile() {
    const zipFilePath = `${this.logsFolderPath}/app.zip`;

    try {
      await zipArchive.zip(this.logFilePath, zipFilePath);
      console.log('Log file compressed successfully');
      return zipFilePath;
    } catch (error) {
      console.error('Error compressing log file:', error);
      throw error;
    }
  }

  async log(message) {
    const timestamp = new Date().toISOString();
    const formattedMessage = `[${timestamp}] ${message}\n`;

    try {
      await RNFS.appendFile(this.logFilePath, formattedMessage, 'utf8');
    } catch (error) {
      console.error('Error writing log:', error);
    }
  }

  async sendEmailWithAttachment() {
    const zipFilePath = await this._compressLogFile();

    try {
      const shareOptions = {
        title: 'Share Log File',
        url: 'file://' + zipFilePath,
        subject: 'Log File', // For email clients
        message: 'Attached is the compressed log file.',
      };

      await Share.open(shareOptions);
      console.log('Share dialog opened with attachment');
    } catch (error) {
      if (error.message !== 'User did not share') {
        console.error('Error opening share dialog:', error);
      }
    }
  }
}

export default Logger;
