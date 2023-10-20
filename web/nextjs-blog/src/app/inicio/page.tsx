import Image from 'next/image'
import humor from '../assets/mood.png'
import alimentacao from '../assets/food.png'
import sono from '../assets/download.png'
import atividadeF from '../assets/atividadeF.png'

export default function inicio() {
    return (
        <div className="justify-items-center mt-16 mb-24 grid grid-rows-1 grid-flow-col">
            <div className="drop-shadow-xl w-60 mt-6 bg-white-Lighthover">
                <Image className='object-cover'
                    src={sono}
                    alt=''
                    width={400}
                    height={100}
                >

                </Image>
                <a href="/sono/view" ><p className='text-center py-10 text-xl font-alt text-green-Dark'>Sono</p></a>

            </div>

            <div className="drop-shadow-xl w-60 mt-6 bg-white-Lighthover">
                <Image className='object-cover'
                    src={humor}
                    alt=''
                    width={400}
                    height={100}
                >

                </Image>
                <a href="/humor/view" ><p className='text-center py-10 text-xl font-alt text-green-Dark'>Humor</p></a>

            </div>

            <div className="drop-shadow-xl w-60 mt-6 bg-white-Lighthover">
                <Image className='object-cover'
                    src={atividadeF}
                    alt=''
                    width={400}
                    height={100}
                >

                </Image>
                <a href="/atividades/view" ><p className='text-center py-10 text-xl font-alt text-green-Dark'>Atividade Fisica</p></a>

            </div>

            <div className="drop-shadow-xl w-60 mt-6 bg-white-Lighthover">
                <Image className='object-cover'
                    src={alimentacao}
                    alt=''
                    width={400}
                    height={100}
                >

                </Image>
                <a href="/alimentacao/view" ><p className='text-center py-10 text-xl font-alt text-green-Dark'>Alimentação</p></a>

            </div>


        </div >

    )
}