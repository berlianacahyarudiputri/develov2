import TitleCard from "../../../components/Cards/TitleCard"

const userSourceData = [
    {source : "Ningsih Cans telah berhasil melakukan pendaftaran mentor", count : "21/05/2023",  },
    {source : "Berliana telah berhasil melakukan pembayaran", count : "21/05/2023",  },
    {source : "Rafie telah mendaftar sebagai mentee", count : "21/05/2023",  },
    {source : "Aulia telah mengajukan cuti", count : "21/05/2023",  },
    {source : "John Smith telah mengupload sesuatu di community", count : "21/05/2023",  },
]

function UserChannels(){
    return(
        <TitleCard title={"Notifikasi"}>
             {/** Table Data */}
             <div className="overflow-x-auto">
                <table className="table w-full">
                    <tbody>
                        {
                            userSourceData.map((u, k) => {
                                return(
                                    <tr key={k}>
                                        <th>{k+1}</th>
                                        <td>{u.source}</td>
                                        <td>{u.count}</td>
                                        <td>{`${u.conversionPercent}%`}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </TitleCard>
    )
}

export default UserChannels