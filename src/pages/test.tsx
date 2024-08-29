import useFetch from "../hooks/useFetch"

export default function TestPage() {
    const slug = 'panel-radiator-purchase-guide';

    const {loading, error, value} = useFetch(
        `https://karemas.com/api/posts/${slug}`,
        {},
        [slug]
    )

    if (loading) {
        return 'Loading ...';
    }

    if (error) {
        return 'Error has accorded';
    }

    return (
        <>
            {value?.data?.map((v) => {
                return <div key={v._id}>
                    <h1>{v.title}</h1>
                </div>
            })}
        </>
    )
}