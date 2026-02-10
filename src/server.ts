import app from './app';
import { cronService } from './services/cronService';

const PORT = process.env.PORT || 3000;

// Iniciar Jobs Agendados
cronService.start();

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Acesse: http://localhost:${PORT}/users`);
});
