import ReactLoading from 'react-loading';
const Loading = () => {
    return (
        <div className="h-screen w-screen bg-black flex items-center">
            <ReactLoading type={'spin'} color={'#FDFE08'} height={'10%'} width={'10%'} className='mx-auto'/>
        </div>
    );
}

export default Loading;