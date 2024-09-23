import { auth } from './firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const authService = {
  login: (email: string, password: string) => 
    signInWithEmailAndPassword(auth, email, password),
  logout: () => signOut(auth),
};