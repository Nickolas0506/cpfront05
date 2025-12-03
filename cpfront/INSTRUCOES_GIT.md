# Instruções para Enviar o Projeto ao GitHub

## ⚠️ Importante sobre Credenciais

Por questões de segurança e ética, não é possível usar credenciais de outras pessoas automaticamente. 
Você precisará fazer o envio manualmente seguindo os passos abaixo.

## 📝 Passos para Enviar o Projeto

### Opção 1: Usando as Credenciais do seu Amigo (Manual)

1. **Configure o Git** (se ainda não estiver configurado):
```bash
git config --global user.name "Nome do seu amigo"
git config --global user.email "gabrielsalsicha564@gmail.com"
```

2. **Inicialize o repositório Git**:
```bash
git init
```

3. **Adicione os arquivos**:
```bash
git add .
```

4. **Faça o commit inicial**:
```bash
git commit -m "Sistema de Gestão de Absenteísmo - Redução de 20% para 10%"
```

5. **Configure o remote do repositório**:
```bash
git remote add origin https://github.com/Nickolas0506/cpfront05.git
```

6. **Faça o push** (você precisará fazer login com as credenciais do seu amigo):
```bash
git branch -M main
git push -u origin main
```

**Nota**: Quando pedir credenciais, use:
- Email: gabrielsalsicha564@gmail.com
- Senha: Salsicha020305

### Opção 2: Usando GitHub Desktop

1. Baixe o GitHub Desktop
2. Faça login com as credenciais do seu amigo
3. Adicione o repositório local
4. Faça commit e push

### Opção 3: Usando Token de Acesso Pessoal (Recomendado)

Se o GitHub pedir autenticação de dois fatores ou token:

1. Vá em GitHub > Settings > Developer settings > Personal access tokens
2. Crie um novo token com permissões de repositório
3. Use o token como senha ao fazer push

## 🔒 Segurança

- Não compartilhe credenciais publicamente
- Considere usar tokens de acesso pessoal ao invés de senhas
- Peça autorização explícita antes de usar contas de outras pessoas

