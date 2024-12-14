import * as fs from 'fs';
import * as path from 'path';
import * as csv from 'csv-parser';
import { Client } from 'pg';

async function importCsvFileToTable(filePath: string, tableName: string): Promise<void> {
    // Connect to the PostgreSQL database
    const client = new Client({
        user: 'postgres', // Replace with your PostgreSQL username
        host: 'postgres-db',     // Replace with your PostgreSQL host
        database: 'hanpoom', // Replace with your PostgreSQL database name
        password: 'admin', // Replace with your PostgreSQL password
        port: 5432,            // Replace with your PostgreSQL port
    });

    await client.connect();

    try {
        const jsonData: any[] = [];

        // Read and parse the CSV file
        await new Promise<void>((resolve, reject) => {
            fs.createReadStream(filePath)
                .pipe(csv())
                .on('data', (row) => jsonData.push(row))
                .on('end', resolve)
                .on('error', reject);
        });

        if (jsonData.length === 0) {
            console.log(`No data found in the file: ${filePath}`);
            return;
        }

        // Start a transaction
        await client.query('BEGIN');

        for (const row of jsonData) {
            const columns = Object.keys(row).map(col => `"${col}"`).join(', ');
            // const values = Object.values(row)
            //     .map(value => (value === null ? 'NULL' : `'${value}'`))
            //     .join(', ');
            const values = Object.values(row)
                .map(value => (value === null || value === "" ? 'NULL' : `'${value}'`))
                .join(', ');

            const query = `INSERT INTO ${tableName} (${columns}) VALUES (${values});`;
            await client.query(query);
        }

        // Commit the transaction
        await client.query('COMMIT');
        console.log(`Data from ${filePath} imported successfully.`);
    } catch (error) {
        // Rollback the transaction in case of error
        await client.query('ROLLBACK');
        console.error('Error importing data:', error);
    } finally {
        // Close the database connection
        await client.end();
    }
}

// Example usage
async function importAllCsvFilesInFolder(folderPath: string): Promise<void> {
    const files = fs.readdirSync(folderPath).filter(file => file.endsWith('.csv'));

    for (const file of files) {
        const filePath = path.join(folderPath, file);
        const tableName = path.parse(file).name; // Use the file name (without extension) as the table name

        console.log(`Importing file: ${filePath} into table: ${tableName}`);
        await importCsvFileToTable(filePath, tableName)
            .catch(err => console.error(`Error importing file ${filePath}:`, err));
    }
}

// Example usage
const folderPath = path.join('./data'); // Replace with the path to your folder containing CSV files

importAllCsvFilesInFolder(folderPath)
    .then(() => console.log('All files imported successfully.'))
    .catch(err => console.error('Error during import process:', err));
