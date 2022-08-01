/*Crie um array com 5 posições e em cada posição, um object array com as seguintes chave/valor (id, nome, telefone, email). Exiba o array via console. e acesse as informações do object na posição 3. */

let arr = [1, 2, 3, 4, 5];

arr[0] = [{ id: 00 }, { nome: 'Soraya' }, { telefone: '(xx)xxxx-xxx' }, { email: 'example@.com' }];
arr[1] = [{ id: 10 }, { nome: 'Paula' }, { telefone: '(yy)yyyy-yyyy' }, { email: 'example@.com' }];
arr[2] = [{ id: 20 }, { nome: 'Zé' }, { telefone: '(oo)0000-000' }, { email: 'example@.com' }];
arr[3] = [{ id: 30 }, { nome: 'Veludo' }, { telefone: '(RR)RRRR-RRR' }, { email: 'example@.com' }];
arr[4] = [{ id: 40 }, { nome: 'Matilde' }, { telefone: '(PP)PPPP-PPP' }, { email: 'example@.com' }];

console.log(arr[3]);