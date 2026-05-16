import express, { Express, Request, Response } from 'express';
import fs from 'fs';
import { Server } from 'node:net';
import path from 'path';

const application: Express = express();
const port: string = process.env.PORT ?? '3001';

application.use(express.json());

application.get('/', (_request: Request, response: Response): void => {
  try {
    const packagePath: string = path.resolve(process.cwd(), 'package.json');
    const packageContent: string = fs.readFileSync(packagePath, { encoding: 'utf8' });
    const packageVersion: { version?: string } = JSON.parse(packageContent) as { version?: string };
    response.json({ team: 'team-2-backend', version: packageVersion.version ?? 'unknown' });
    console.log('Response send');
  } catch {
    response.status(500).json({ error: 'The version could not be read' });
  }
});

const server: Server = application
  .listen(port, (): void => {
    console.log('The server is running in port: ', port);
  })
  .on('error', (error: Error): void => {
    console.log('Error: ', error.message);
  });

export { application, server };
