import { createFloatingShape } from '../shape/shapes';
import { getIcon } from '../../icons/getIcon';

export function createLoginUI(): HTMLElement {
  const div = document.createElement('div');
  div.className =
    'relative flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-500 animate-fade-bg overflow-hidden';

  const shapesContainer = document.createElement('div');
  shapesContainer.className = 'absolute inset-0 overflow-hidden z-0';
  div.appendChild(shapesContainer);

  const formContainer = document.createElement('div');
  formContainer.className =
    'relative bg-gradient-to-bl from-teal-500 via-cyan-600 to-indigo-700 p-8 rounded-xl shadow-2xl transition-transform duration-700 ease-in-out hover:-translate-y-1 hover:rotate-1 z-10';

  formContainer.innerHTML += `
    <h1 class="text-3xl font-bold text-center text-white mb-6">Login</h1>
    <form id="login-form" class="flex flex-col gap-4">
      <div class="relative">
        <input id="email" type="email" placeholder="Email" class="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" required>
      </div>
      <div class="relative">
        <input id="password" type="password" placeholder="Password" class="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" required>
      </div>
      <div class="flex flex-row gap-2 items-center">
        <button type="submit" class="flex-1 bg-yellow-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition duration-300">Login</button>
        <div id="g_id_signin"></div>
      </div>
    </form>
    <button id="register-button" class="mt-4 text-purple-300 hover:text-purple-500 transition duration-300 underline">Don't have an account? Register</button>
  `;

  div.appendChild(formContainer);

  setInterval(() => createFloatingShape(shapesContainer), 600);

  return div;
}