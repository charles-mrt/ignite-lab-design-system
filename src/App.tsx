import './styles/global.css';
import { Logo } from './components/logo/Logo'
import { Heading } from './components/heading/Heading';
import { Text } from './components/text/Text';

import { TextInput } from './components/textInput/TextInput';
import { Envelope, Lock } from 'phosphor-react';
import { Checkbox } from './components/checkbox/Checkbox';
import { Button } from './components/button/Button';

export function App() {

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      
      <header className="flex flex-col items-center">
        <Logo className="drop-shadow-[0_0px_20px_rgba(124,_58,_237,_0.9)]"/>

        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        
        <Text size="lg" className="text-gray-400 mt-1">Faça Login e comece a jusar!</Text>

      </header>

      <form className="flex flex-col items-stretch gap-5 w-full max-w-sm mt-10">

        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de email</Text>

          <TextInput.Root>
            <TextInput.Icon >
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input type="email" id="email" placeholder="Digite seu e-mail" />
          </TextInput.Root>

        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type="password" id="password" placeholder="*************" />
          </TextInput.Root>

        </label>

        <label htmlFor="remember" className="flex items-center gap-2">          
          <Checkbox id="remember"/>
          <Text size="sm" className="text-gray-200">Lembre de mim por 30 dias</Text>
        </label>
       
        <Button type="submit" className="mt-4">Entrar na plataforma</Button>
        
        <footer className="flex flex-col items-center gap-4 mt-4">
          <Text asChild size="sm">
            <a href="" className="text-gray-400 underline  transition hover:text-gray-200">Esquece sua Senha?</a>
          </Text>
          <span className="text-gray-400">
            Não Possui conta?
            <a href="" className="text-violet-600 underline ml-2 transition hover:text-violet-500">Crie uma agora!</a>
          </span>
          
        </footer>
      </form>
    </div>
  );
}
