import { ExtensionContext, services, workspace, LanguageClient } from 'coc.nvim';

export async function activate(context: ExtensionContext): Promise<void> {
  // BEGIN NEW CODE
  const config = workspace.getConfiguration('tjs-postfix');
  const templateList: any[] = config.get<any[]>('templateMapList', []);
  // END NEW CODE
  const serverOptions = {
    command: 'tjs-language-server', // run jls
  };
  const clientOptions = {
    documentSelector: ['javascript', 'typescript', 'typescriptreact', 'javascriptreact'],
  };
  const client = new LanguageClient(
    'tjs-postfix', // the id
    'tjs-postfix', // the name of the language server
    serverOptions,
    clientOptions
  );
  context.subscriptions.push(services.registLanguageClient(client));
}
