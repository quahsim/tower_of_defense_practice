import { prisma } from '../utils/prisma/index.js';

// Add a user to the database when click "start game"
export const addUser = async (userData) => {
  try {
    const user = await prisma.user.create({
      data: userData,
    });
    return user;
  } catch (error) {
    console.error('Error adding user:', error);
    throw error;
  }
};

// Remove a user from the database
export const removeUser = async (userId) => {
  try {
    const user = await prisma.user.delete({
      where: {
        id: userId,
      },
    });
    return user;
  } catch (error) {
    console.error('Error removing user:', error);
    throw error;
  }
};

// Get a user from the database by ID
export const getUser = async (userId) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        userId: userId,
      },
    });
    return user;
  } catch (error) {
    console.error('Error getting user:', error);
    throw error;
  }
};

// Get all users from the database
export const getUsers = async () => {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    console.error('Error getting all users:', error);
    throw error;
  }
};
