import {useGetAllProductsQuery, useGetProductQuery,} from "../redux/api/apiSlice";

const Posts = () => {

    const {
        data: allProductsData,
        error,
        isError,
        isLoading,
    } = useGetAllProductsQuery();
    const {data: singleProductData} = useGetProductQuery("iphone");

    console.log(allProductsData);
    console.log(singleProductData);

    // const {loading , posts , error} = useSelector(state => state.post)
    // const dispatch = useDispatch();
    //
    // const handleGetPosts = () => {
    //   dispatch(fetchPosts(1));
    // }
    //
    // useEffect(() => {
    //   handleGetPosts();
    // }, []);
    //
    // if(loading) {
    //   return 'Loading ...'
    // }
    // if(error){
    //   return 'Error'
    // }
    //
    // console.log(posts);

    return <div>
        <button>Get Posts</button>

    </div>;
};
export default Posts;