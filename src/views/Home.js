import useFetch from '.././api/useFetch';
import TabMain from '.././components/TabMain'

const Home = () => {
    const { data, error, isPending } = useFetch(process.env.REACT_APP_BACKEND_HOST);
    return (
        <div>
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { data && <TabMain data={data}/>}
        </div>
    );
}

export default Home;