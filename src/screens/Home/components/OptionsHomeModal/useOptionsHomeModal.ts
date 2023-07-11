import auth from '@react-native-firebase/auth';

export function useOptionsHomeModal() {
    const signOut = () => {
        auth().signOut();
    };

    return {
        signOut
    }
}