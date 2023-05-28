import { Loader } from './styles';
import { DotLoader } from 'react-spinners';

export default function index({ loading }) {
    return (
        <Loader>
            <DotLoader color="#2f82ff" loading={loading} />
        </Loader>
    );
}
