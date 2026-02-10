import mysql from 'mysql2/promise';

async function fixDates() {
    console.log('--- Corrigindo Datas Inválidas no MySQL ---');
    try {
        const connection = await mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'meu_projeto_ts',
            port: 3306
        });

        // Forçar todos os campos 'date' para NULL para garantir que não haja '0000-00-00'
        console.log('Atualizando coluna date para NULL...');
        await connection.query('UPDATE user SET date = NULL');

        console.log('✅ Datas corrigidas com sucesso!');
        await connection.end();
    } catch (err: any) {
        console.error('❌ Erro:', err.message);
    }
}

fixDates();
