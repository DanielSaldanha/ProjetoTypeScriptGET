import cron from 'node-cron';
import prisma from '../config/prisma';

export const cronService = {
    start: () => {
        // Cron expression: 0 0 * * * = Executar todo dia à meia-noite (00:00)
        // Para testar rápido (a cada minuto), use: '* * * * *'
        cron.schedule('* * * * *', async () => {
            console.log('⏰ [Cron Job] Iniciando atualização diária de datas...');

            try {
                const result = await prisma.user.updateMany({
                    data: {
                        date: new Date() // Define como NOW() (data atual do JS)
                    }
                });

                console.log(`✅ [Cron Job] Sucesso! ${result.count} usuários atualizados para a data de hoje.`);
            } catch (error) {
                console.error('❌ [Cron Job] Erro ao atualizar datas:', error);
            }
        });

        console.log('📅 Serviço de agendamento (Cron) iniciado: Atualização programada para 00:00.');
    }
};
