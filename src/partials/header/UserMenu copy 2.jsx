import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Transition from '../../utils/Transition';

import UserAvatar from '../../images/user-avatar-32.png';

function UserMenu() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false); // State for confirm modal

  const trigger = useRef(null);
  const dropdown = useRef(null);

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
      setDropdownOpen(false);
    };

    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };

    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  const handleLogout = () => {
    setConfirmModalOpen(true); // Open the confirm modal
  };

  const confirmLogout = () => {
    setDropdownOpen(false); // Close the dropdown
    setConfirmModalOpen(false); // Close the confirm modal
    // Perform logout action here
  };

  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className="inline-flex justify-center items-center group"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <img className="w-8 h-8 rounded-lg" src="https://avatars.githubusercontent.com/u/64233257?v=4" width="32" height="32" alt="User" />
        <div className="flex items-center truncate">
          <span className="truncate ml-2 text-sm font-medium group-hover:text-slate-800">Letícia Milan</span>
          <svg className="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" viewBox="0 0 12 12">
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
          </svg>
        </div>
      </button>

      <Transition
        className="origin-top-right z-10 absolute top-full right-0 min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <div className="pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200">
            <div className="font-medium text-slate-800">Letícia Milan</div>
            <div className="text-xs text-slate-500 italic">Desenvolvedora Web</div>
          </div>
          <ul>
            <li>
              <Link
                className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                to="/"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Perfil
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                to="/"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Meus favoritos
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                to="/"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Biblioteca
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                to="/"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Configurações
              </Link>
            </li>
            <li>
              <button
                className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                onClick={handleLogout}
              >
                Sair
              </button>
            </li>
          </ul>
        </div>
      </Transition>

      {/* Confirm Logout Modal */}
      {confirmModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white border border-gray-200 rounded-lg p-8 max-w-sm w-full mx-4">
            <p className="mb-8">Deseja realmente sair?</p>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-all"
                onClick={() => setConfirmModalOpen(false)} // Cancel logout
              >
                Cancelar
              </button>
              <button
                className="px-4 py-2 ml-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all"
                onClick={confirmLogout} // Confirm logout
              >
                <Link to="/signin">
                  Sair
                </Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserMenu;