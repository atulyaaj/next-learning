interface Params {
    params: Promise<{ uid: string; articleId: string }>
}

export default async function UserArticleNumberComp({ params }: Params) {
    const { uid, articleId } = await params;
    return (
        <div className="w-500 bg-amber-800 text-amber-50 h-30">
            <h2>User Article Number Page</h2>
            <h3>User # {uid}</h3>
            <h3>Article # {articleId}</h3>
        </div>
    );
}
