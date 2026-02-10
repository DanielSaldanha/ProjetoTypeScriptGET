import { Request, Response } from 'express';
import prisma from '../config/prisma';

export const userController = {
    getAll: async (req: Request, res: Response) => {
        try {
            const users = await prisma.user.findUnique(
                {
                    where: {
                        id: 1
                    }
                }
            );
            res.json(users);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao buscar usuários' });
        }
    }
};
