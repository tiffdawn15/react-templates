import { useState, useEffect } from 'react';

function useOnlineStatus(){
    const [isOnline, setIsOnline] = useState(true);
    useEffect(() => {
        function handleOnline(){
            setIsOnline(true);
        }
        function handleOffline(){
            setIsOnline(false); 
        }

        window.addEventListener('online', handleOffline); 
        window.addEventListener('offline', handleOffline); 

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline); 
        };
    }, []); 
    return isOnline; 
    
}

export default useOnlineStatus