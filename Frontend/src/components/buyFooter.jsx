import React from "react";

const buyFooter = () => {
  return (
    <footer class="bg-white opacity-80 mt-[60px] rounded-lg shadow m-4 dark:bg-gray-800">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a
            href="https://flowbite.com/"
            class="hover:underline">
            Aquari™
          </a>
          . All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://aquari.org/documents/terms-services.pdf"
              class="hover:underline me-4 md:me-6">
              Terms & Conditions
            </a>
          </li>
          <li>
            <a
              href="#"
              class="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="#"
              class="hover:underline me-4 md:me-6"></a>
          </li>
          <li>
            <a
              href="#"
              class="hover:underline"></a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default buyFooter;
