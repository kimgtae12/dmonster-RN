import {QueryClient} from '@tanstack/react-query';
import loadReactQuery from './loader';

const queryClient = new QueryClient(); //query client 선언

export {loadReactQuery, queryClient};
