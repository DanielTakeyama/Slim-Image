import NameSite from '@/_components/nameSite/nameSite';

export default function Home(){
  return (
    <main className="w-full h-full bg-linear-to-r from-cyan-500 to-blue-500 flex flex-col">{/*Container Principal*/}
      
      <header className="w-full bg-red-400 h-40 flex items-center justify-center">{/*Container do Titulo*/}
        <NameSite />
      </header>

      {/*--------------------------------------------------------------------------*/}
      <section className="w-full h-full flex flex-row max-[768px]:flex-col">{/*Container dos elementos de Upload e Informações*/}

        <article className="w-[50%] h-full bg-purple-400 max-[768px]:w-full">{/*Container do Alien e Upload de Arquivos*/}
          <p>teste</p>
        </article>

        {/*--------------------------------------------------------------------------*/}

        <article className="w-[50%] h-full bg-green-400 max-[768px]:w-full">{/*Container das Informações*/}

        </article>
      </section>
      {/*--------------------------------------------------------------------------*/}

      <footer className="w-full h-20 bg-black">{/* Rodapé */}

      </footer>
      
      {/*--------------------------------------------------------------------------*/}
    </main>
  );
}
