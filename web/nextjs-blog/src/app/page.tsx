import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Home() {
  return (

    <div>
    
      <div className="bg-blue-Light grid justify-items-center space-y-16">
        <div className="p-10 mr-32 h-20 w-2/3 ">
          <p>
            Bem-estar é mais do que um site: é o seu guia para uma vida plena. Aqui, você pode monitorar sua rotina de sono, alimentação, atividade física e muito mais, tudo para alcançar a melhor qualidade de vida possível.
          </p>
        

        </div>

        <div className="bg-blue-Normalhover rounded-r-lg p-12" >
          <p className="mb-5">Moderador de sono</p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat bibendum sit felis, sollicitudin et. Nulla aliquet integer hac ac morbi.
          </p>
          <button className="w-28 mt-6 text-white-Light hover:bg-green-Darkactive rounded-full bg-green-Dark"> Saiba mais</button>
        </div>

        <div className="bg-blue-Normalhover rounded-r-lg p-12" >
          <p className="mb-5">Moderador de humor</p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat bibendum sit felis, sollicitudin et. Nulla aliquet integer hac ac morbi.
          </p>
          <button className="w-28 mt-6 text-white-Light hover:bg-green-Darkactive rounded-full bg-green-Dark"> Saiba mais</button>
        </div>

        <div className="bg-blue-Normalhover rounded-r-lg p-12" >
          <p className="mb-5">Moderador de atividade fisica</p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat bibendum sit felis, sollicitudin et. Nulla aliquet integer hac ac morbi.
          </p>
          <button className="w-28 mt-6 text-white-Light hover:bg-green-Darkactive rounded-full bg-green-Dark"> Saiba mais</button>
        </div>

        <div className="bg-blue-Normalhover rounded-r-lg p-12" >
          <p className="mb-5">Moderador de alimentação</p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat bibendum sit felis, sollicitudin et. Nulla aliquet integer hac ac morbi.
          </p>
          <button className="w-28 mt-6 text-white-Light hover:bg-green-Darkactive rounded-full bg-green-Dark"> Saiba mais</button>
        </div>


        <div className="bg-blue-Normal rounded-full grid grid-rows-1 grid-flow-col p-12" >
            <div className="bg-white-Light p-10 rounded-l-lg">
              <p className="text-blue-500">Sobre nós</p>
            </div>
            <div className="ml-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Consequat bibendum sit felis, sollicitudin et. Nulla aliquet integer hac ac morbi.
          </p>
            </div>
        </div>


        

      </div>

      

   
    </div>
  )
}
