import { Header } from '../../components/Header';
import './about.css'

export default function About() {
    return (
        <main className="mt-6">
            <div>
                {/* <h1 className="text-2xl font-semibold">About</h1> */}
                <h1 className='header'>About</h1>
                <p className="content">A typical movie page often includes a synopsis or summary of the movie's storyline, allowing potential viewers to get a sense of what the film is about. It may also feature trailers, teasers, or promotional videos to give audiences a visual preview of the movie. Additionally, you might find images, stills, or posters related to the film.</p>
            </div>
        </main>
    );
}