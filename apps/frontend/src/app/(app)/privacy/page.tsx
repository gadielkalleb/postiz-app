import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Foretell',
  description: 'Como a Serverless Code trata dados pessoais no Foretell.',
};

const updatedAt = '11 de novembro de 2026';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 text-slate-900">
      <article className="mx-auto max-w-3xl space-y-8 leading-7">
        <header className="space-y-3">
          <a href="/" className="font-semibold text-indigo-700">Foretell</a>
          <h1 className="text-4xl font-bold tracking-tight">Política de Privacidade</h1>
          <p>Atualizada em {updatedAt}.</p>
          <p>
            Esta política explica como a Serverless Code trata dados pessoais
            quando você visita o Foretell ou usa seus recursos de planejamento,
            agendamento, publicação e análise de conteúdo para redes sociais.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">1. Quem opera o Foretell</h2>
          <p>
            O Foretell é operado por Gadiel Kaleb dos Santos, que atua como
            Serverless Code, CNPJ 39.540.462/0001-37. Para dúvidas ou solicitações
            sobre privacidade, escreva para{' '}
            <a className="underline" href="mailto:suporte@serverlesscode.cloud">
              suporte@serverlesscode.cloud
            </a>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">2. Dados tratados</h2>
          <p>Dependendo dos recursos que você usa, o Foretell pode tratar:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>nome, e-mail, senha armazenada de forma protegida, idioma e dados da organização;</li>
            <li>contas sociais que você conecta, identificadores, permissões e tokens de acesso necessários para publicar em seu nome;</li>
            <li>textos, imagens, vídeos, links, rascunhos, agendamentos e resultados de publicação que você envia ou cria;</li>
            <li>dados técnicos e registros de acesso necessários para operar, proteger e diagnosticar o serviço;</li>
            <li>plano, situação da assinatura e referências de pagamento. Os dados completos do cartão são processados pelo Stripe; o Foretell recebe informações necessárias para administrar a assinatura.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">3. Finalidades e compartilhamento</h2>
          <p>
            Usamos os dados para criar e proteger sua conta, armazenar e agendar
            conteúdo, publicar somente nas contas que você conectou, mostrar
            informações disponíveis pelas plataformas sociais, administrar a
            assinatura, enviar mensagens operacionais e atender solicitações.
          </p>
          <p>
            Para prestar esses serviços, dados podem ser processados por
            provedores de hospedagem e armazenamento (incluindo Cloudflare),
            envio de e-mail (Resend), cobrança (Stripe) e pelas plataformas
            sociais que você escolher conectar. Essas plataformas recebem os
            dados necessários para executar a ação que você solicitou, conforme
            suas próprias políticas e termos.
          </p>
          <p>
            Arquivos de mídia usados em publicações podem ser disponibilizados
            por uma URL pública para que as redes sociais consigam acessá-los.
            Quem obtiver essa URL poderá abrir o arquivo. Não vendemos dados
            pessoais.
          </p>
          <p>
            Alguns provedores podem tratar dados fora do Brasil. Nesses casos,
            adotamos as medidas contratuais e de segurança aplicáveis ao serviço.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">4. Retenção e segurança</h2>
          <p>
            Mantemos dados enquanto a conta e os recursos associados forem
            necessários para prestar o serviço, cumprir obrigações aplicáveis e
            resolver questões de segurança ou cobrança. Você pode pedir a
            exclusão da conta e dos dados associados pelo e-mail de contato
            acima. Alguns registros poderão ser mantidos quando a lei exigir ou
            permitir.
          </p>
          <p>
            Aplicamos controles técnicos e organizacionais para limitar o acesso
            aos dados e proteger as credenciais. Nenhum sistema conectado à
            internet pode oferecer garantia absoluta de segurança.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">5. Seus direitos e desconexão</h2>
          <p>
            Nos termos da legislação aplicável, você pode solicitar confirmação
            e acesso aos dados, correção, informação sobre compartilhamentos,
            portabilidade quando aplicável, anonimização ou exclusão nos casos
            previstos em lei. Para interromper uma integração social, remova a
            conta nas configurações do Foretell e, se desejar, revogue também a
            autorização diretamente na plataforma social.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">6. Atualizações</h2>
          <p>
            Podemos atualizar esta política para refletir mudanças no serviço ou
            nas obrigações aplicáveis. A versão vigente será publicada nesta
            página; mudanças relevantes serão comunicadas pelos canais da conta.
          </p>
        </section>

        <footer className="border-t pt-6 text-sm">
          <a className="underline" href="/terms">Termos de Serviço</a>
          {' · '}
          <a className="underline" href="/data-deletion">Exclusão de dados</a>
          {' · '}
          <a className="underline" href="mailto:suporte@serverlesscode.cloud">Contato</a>
        </footer>
      </article>
    </main>
  );
}
