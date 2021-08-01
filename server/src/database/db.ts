import { Connection, ConnectionOptions, createConnection, getConnection } from "typeorm";
import { errorLog } from "../utils/logger";
import { default as ormConfig } from './ormconfig';
import { MAX_RECONNECT_COUNT } from "../common/config";

const getDBConnection = async () => {
  let connection: Connection;

  try {
    connection = getConnection();
  } catch(err) {
    // Handle
  }

  try {
    if (connection) {
      if (!connection.isConnected) await connection.connect();
    } else {
      await createConnection(ormConfig as ConnectionOptions);
    }

    console.log('Successfully connected to DB');
  } catch(err) {
    console.error('Connection to DB failed');
    errorLog(`Connection to DB failed, ${err}`);
  }
};

export const dbConnect = async (callback: () => void, reconnectCount = 0): Promise<void> => {
  try {
    await getDBConnection();
    callback();
  } catch (err) {
    console.error(`Error #${reconnectCount} while DB connection: ${err}`);
    if (reconnectCount < +MAX_RECONNECT_COUNT) {
      await new Promise(resolve => setTimeout(resolve, 3000));
      await dbConnect(callback, reconnectCount++);
    }
  }
};
