"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App() {
    const { data, error, isLoading } = useSWR("https://swapi.dev/api/films/", fetcher);
    const router = useRouter('');

    if (error) return "An error has occurred.";
    if (isLoading) return "Loading...";

    const columns = [
        {
            key: "episodeId",
            label: "Episode",
        },
        {
            key: "episodeName",
            label: "EpisodeName",
        },
        {
            key: "director",
            label: "Director",
        },

    ];



    const handleBack = () => {
        // router.push('/');
        router.back();

    }

    data.results.sort((a, b) => a.episode_id - b.episode_id);

    return (
        <div>
            <h1 className="text-3xl  underline">Film Wikipedia </h1>
            <center>
                <table className="table-fixed border border-gray-300">
                    <thead >
                        <tr >
                            {columns.map((column) =>
                                <th key={column.key} className=" border border-gray-300">{column.label}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {data.results.map((film, index) => (
                            <tr key={index} >
                                <td className=" border border-gray-300">{film.episode_id}</td>
                                <td className=" border border-gray-300">{film.title}</td>
                                <td className=" border border-gray-300">{film.director}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </center>

            <div style={{ marginLeft: '75rem' }}>
                <button onClick={handleBack} className="text-1xl  underline"  >Go Back</button>
                {/* <Link href='/' className="text-1xl  underline" >Home</Link> */}
            </div>
        </div>
    );
}
