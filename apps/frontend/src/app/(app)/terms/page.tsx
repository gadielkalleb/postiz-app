import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termos de Serviço | Foretell',
  description: 'Termos de uso do Foretell, operado pela Serverless Code.',
};

const updatedAt = '11 de novembro de 2026';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 text-slate-900">
      <article className="mx-auto max-w-3xl space-y-8 leading-7">
        <header className="space-y-3">
          <a href="/" className="font-semibold text-indigo-700">Foretell</a>
          <h1 className="text-4xl font-bold tracking-tight">Termos de Serviço</h1>
          <p>Atualizados em {updatedAt}.</p>
          <p>
            Estes termos regem o uso do Foretell, serviço operado por Gadiel
            Kaleb dos Santos, sob o nome Serverless Code, CNPJ
            39.540.462/0001-37. Ao criar uma conta ou usar o serviço, você
            concorda com estes termos e com a{' '}
            <a className="underline" href="/privacy">Política de Privacidade</a>.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">1. A conta e seu uso</h2>
          <p>
            Forneça informações corretas, mantenha suas credenciais em sigilo e
            avise-nos se suspeitar de acesso não autorizado. Você é responsável
            pelas ações feitas em sua conta e por manter autorização para usar
            as contas sociais que conectar.
          </p>
          <p>
            Use o Foretell conforme a lei, estes termos e as regras das redes
            sociais conectadas. Não use o serviço para spam, fraude, violação de
            direitos de terceiros, abuso de APIs ou para contornar limites das
            plataformas.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">2. Conteúdo e publicação</h2>
          <p>
            Você mantém os direitos sobre o conteúdo que envia. Você nos autoriza
            a armazená-lo e processá-lo na medida necessária para oferecer os
            recursos que solicitar, incluindo agendamento e publicação nas
            contas sociais conectadas.
          </p>
          <p>
            Você é responsável por revisar conteúdo, destinatários, horários,
            permissões e direitos de uso antes da publicação. A entrega também
            depende da disponibilidade, das regras e das decisões das redes
            sociais; o Foretell não garante que uma publicação será aceita ou
            permanecerá disponível nessas plataformas.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">3. Planos e cobrança</h2>
          <p>
            Os recursos, limites, valores em reais e periodicidade aplicáveis
            serão apresentados antes da contratação. Assinaturas são cobradas
            pelo Stripe conforme o plano selecionado. A assinatura pode ser
            administrada na área de cobrança da conta; alterações passam a
            valer conforme a informação apresentada nessa área.
          </p>
          <p>
            O cancelamento, estorno e demais direitos relacionados à cobrança
            seguem as informações exibidas no momento da compra e a legislação
            aplicável. O Foretell não armazena o número completo do seu cartão.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">4. Disponibilidade e suspensão</h2>
          <p>
            Podemos interromper temporariamente recursos para manutenção,
            segurança ou correção. Podemos suspender ou encerrar contas que
            violem estes termos, a lei ou as regras de plataformas conectadas,
            buscando comunicar o motivo quando isso for possível e permitido.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">5. Software e propriedade intelectual</h2>
          <p>
            O Foretell é baseado no projeto de código aberto Postiz e em suas
            licenças aplicáveis. Os direitos sobre o software permanecem com
            seus respectivos titulares; estes termos não transferem a você a
            propriedade do serviço ou das marcas de terceiros.
          </p>
          <p>
            O código-fonte correspondente a esta instalação e as alterações do
            Foretell estão disponíveis no{' '}
            <a
              className="underline"
              href="https://github.com/gadielkalleb/postiz-app"
              rel="noreferrer"
              target="_blank"
            >
              repositório público
            </a>, sob a licença indicada nele.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">6. Contato e alterações</h2>
          <p>
            Para suporte, privacidade ou dúvidas sobre estes termos, fale com{' '}
            <a className="underline" href="mailto:suporte@serverlesscode.cloud">
              suporte@serverlesscode.cloud
            </a>.
            Podemos atualizar estes termos e publicaremos a versão vigente
            nesta página.
          </p>
        </section>

        <footer className="border-t pt-6 text-sm">
          <a className="underline" href="/privacy">Política de Privacidade</a>
          {' · '}
          <a className="underline" href="/data-deletion">Exclusão de dados</a>
          {' · '}
          <a className="underline" href="mailto:suporte@serverlesscode.cloud">Contato</a>
        </footer>
      </article>
    </main>
  );
}
