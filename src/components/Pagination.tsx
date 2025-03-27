
const Pagination = ({ page, setPage, totalPages }: any) => {
    return (
        <>
            <button 
                onClick={() => setPage(page - 1)} 
                disabled={page === 1}
                className="px-4 py-2 border rounded bg-gray-300"
            >
                Пред.
            </button>
            <button 
                onClick={() => setPage(page + 1)} 
                disabled={totalPages && page == totalPages}
                className="px-4 py-2 border rounded bg-gray-300"
            >
                След.
            </button>
        </>
                    
    )

}

export default Pagination;