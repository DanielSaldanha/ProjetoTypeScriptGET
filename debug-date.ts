import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkData() {
    console.log('--- Verificando dados no Prisma ---');
    try {
        // Tenta buscar raw para ver o que vem sem o filtro do Model do Prisma travar
        const users = await prisma.$queryRaw`SELECT id, name, date FROM user`;
        console.log('Dados encontrados:', users);
    } catch (error: any) {
        console.error('❌ Erro ao ler dados:', error.message);
    }
}

checkData();
