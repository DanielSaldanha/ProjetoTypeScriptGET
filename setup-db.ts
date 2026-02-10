import mysql from 'mysql2/promise';

async function setupDatabase() {
    console.log('--- Iniciando Setup do Banco de Dados ---');

    try {
        // 1. Conectar sem banco
        const connection = await mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: '',
            port: 3306
        });

        // 2. Criar Banco
        console.log('Criando banco de dados meu_projeto_ts...');
        await connection.query('CREATE DATABASE IF NOT EXISTS meu_projeto_ts');

        // 3. Usar Banco
        await connection.query('USE meu_projeto_ts');

        // 4. Criar Tabela User
        console.log('Criando tabela user...');
        await connection.query(`
      CREATE TABLE IF NOT EXISTS user (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

        // 5. Inserir Dados Iniciais (se vazio)
        const [rows] = await connection.query('SELECT count(*) as count FROM user');
        if ((rows as any)[0].count === 0) {
            console.log('Inserindo usuários de teste...');
            await connection.query(`
        INSERT INTO user (name, email, password) VALUES 
        ('Usuario Teste', 'teste@email.com', 'senha123'),
        ('Daniel', 'daniel@email.com', 'admin')
      `);
        } else {
            console.log('Tabela user já contém dados.');
        }

        console.log('✅ Setup concluído com sucesso!');
        process.exit(0);

    } catch (error: any) {
        console.error('❌ Erro no setup:', error.message);
        process.exit(1);
    }
}

setupDatabase();
