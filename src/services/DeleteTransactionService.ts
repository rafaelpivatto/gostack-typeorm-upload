import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionRepository = getRepository(Transaction);

    const transactionToDelete = await transactionRepository.findOne(id);

    if (!transactionToDelete) {
      throw new AppError('Transaction not found.', 404);
    }

    await transactionRepository.delete(transactionToDelete.id);
  }
}

export default DeleteTransactionService;
