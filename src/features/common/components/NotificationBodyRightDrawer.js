function NotificationBodyRightDrawer(){
    return(
        <>
             {
                [...Array(5)].map((_, i) => {
                    return <div key={i} className={"grid mt-3 card bg-blue-200 rounded-box p-3" + (i < 5 ? " bg-blue-100" : "")}>
                            {i % 2 === 0 ? `Ningsih Cans telah berhasil melakukan pendaftaran mentor` : `Berliana telah berhasil melakukan pembayaran`}
                        </div> 
                })
            }
        </>
    )
}

export default NotificationBodyRightDrawer