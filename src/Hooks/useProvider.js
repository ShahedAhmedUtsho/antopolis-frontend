import { ProviderContext } from '@/Provider/Provider';
import React, { useContext } from 'react';

const useProvider = () => {
    const a = useContext(ProviderContext)
    return a 
};

export default useProvider;