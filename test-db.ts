import mysql from 'mysql2/promise';

async function testConnection() {
    console.log('--- Teste de Conexão MySQL ---');

    // 1. Testar conexão geral (sem banco específico)
    try {
        const connection = await mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: '', // Senha vazia
            port: 3306
        });
        console.log('✅ Conexão com MySQL: SUCESSO!');

        // 2. Testar se o banco existe
        try {
            await connection.query('USE meu_projeto_ts');
            console.log('✅ Banco de dados "meu_projeto_ts": ENCONTRADO!');

            // 3. Testar se a tabela existe
            try {
                const [rows] = await connection.query('SELECT count(*) as count FROM user');
                console.log('✅ Tabela "user": ENCONTRADA!');
                console.log('ℹ️ Número de usuários:', (rows as any)[0].count);
            } catch (err: any) {
                console.error('❌ Erro ao acessar tabela "user":', err.message);
            }

        } catch (err: any) {
            console.error('❌ Banco de dados "meu_projeto_ts" NÃO ENCONTRADO.', err.message);
            console.log('⚠️  Você rodou o script database.sql no XAMPP?');
        }

        await connection.end();

    } catch (err: any) {
        console.error('❌ FALHA na conexão com MySQL:', err.message);
        console.log('⚠️  Verifique se o XAMPP/MySQL está rodando e se a porta é 3306.');
        console.log('⚠️  Verifique se o usuário "root" tem senha.');
    }
}

testConnection();
