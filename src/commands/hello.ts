import { Command } from 'oclif';

export default class Hello extends Command {
  static description = 'Say hello to the world';
  static examples = ['<%= config.bin %> <%= command.id %>'];

  async run(): Promise<void> {
    this.log('Hello from cli-template-nodejs!');
  }
}
