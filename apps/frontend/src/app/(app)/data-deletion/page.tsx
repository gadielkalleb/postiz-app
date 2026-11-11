import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Exclusão de Dados | Foretell',
  description: 'Como solicitar a exclusão de dados do Foretell.',
};

export default function DataDeletionPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 text-slate-900">
      <article className="mx-auto max-w-3xl space-y-6 leading-7">
        <a href="/" className="font-semibold text-indigo-700">Foretell</a>
        <h1 className="text-4xl font-bold tracking-tight">Exclusão de dados</h1>
        <p>
          Você pode desconectar uma rede social nas configurações do Foretell e
          também pode revogar o acesso do Foretell diretamente nas configurações
          dessa rede.
        </p>
        <p>
          Para solicitar a exclusão da conta e dos dados associados, envie uma
          mensagem para{' '}
          <a className="underline" href="mailto:suporte@serverlesscode.cloud?subject=Solicita%C3%A7%C3%A3o%20de%20exclus%C3%A3o%20de%20dados">
            suporte@serverlesscode.cloud
          </a>{' '}
          pelo endereço de e-mail cadastrado, informe o nome da organização e
          escreva “exclusão de dados” no assunto. Confirmaremos o recebimento e
          poderemos pedir informações para verificar que você controla a conta.
        </p>
        <p>
          Após confirmar a solicitação, removeremos ou anonimizaremos os dados
          associados quando possível, ressalvados os registros que precisem ser
          mantidos por obrigação legal, cobrança, prevenção a fraude ou segurança.
          O pedido também se aplica à remoção da autorização e dos dados que o
          Foretell mantém a partir das integrações sociais, conforme as regras
          da plataforma conectada.
        </p>
        <p>
          Para entender quais informações são tratadas, consulte a{' '}
          <a className="underline" href="/privacy">Política de Privacidade</a>.
        </p>
      </article>
    </main>
  );
}
