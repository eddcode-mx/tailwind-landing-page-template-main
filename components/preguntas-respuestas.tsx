"use client";
import { useState } from "react";

export default function PreguntasRespuestas() {
  const [isOpen, setIsOpen] = useState<boolean[]>([false, false, false]);

  const toggleAccordion = (index: number) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <div className="container my-24 mx-auto md:px-6 xl:px-24">
      <section className="mb-32">
        <h2 className="mb-6 pl-6 text-3xl font-bold">Preguntas y respuestas</h2>
        <div id="accordionFlushExample">
          {Array.from({ length: 3 }, (_, index) => (
            <div key={index} className="rounded-none border border-t-0 border-l-0 border-r-0 border-neutral-200">
              <h2 className="mb-0" id={`flush-heading${index + 1}`}>
                <button
                  className="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400"
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen[index]}
                  aria-controls={`flush-collapse${index + 1}`}
                >
                  {index === 0 && '¿Dónde descargar la app?'}
                  {index === 1 && '¿La app para qué sirve?'}
                  {index === 2 && '¿La app es para todos?'}
                  <span
                    className={`ml-auto h-5 w-5 shrink-0 rotate-${isOpen[index] ? '0' : '-180'} fill-[#336dec] transition-transform duration-200 ease-in-out group-[data-te-collapse-collapsed]:rotate-0 group-[data-te-collapse-collapsed]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[data-te-collapse-collapsed]:fill-[#eee]`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </span>
                </button>
              </h2>
              <div
                id={`flush-collapse${index + 1}`}
                className={`!visible ${isOpen[index] ? '' : 'hidden'} border-0`}
                data-te-collapse-item
                aria-labelledby={`flush-heading${index + 1}`}
              >
                <div className="py-4 px-5 text-neutral-500 dark:text-black">
                  {index === 0 && (
                    <>
                      <p>• En la página <a href="https://mitienditajuntos.com">https://mitienditajuntos.com</a></p>
                      <p>• Próximamente estará disponible en Apple Store y Google Play.</p>
                    </>
                  )}
                  {index === 1 && (
                    <p>• Te otorga un crédito pre-aprobado online con una módica comisión administrativa.</p>
                  )}
                  {index === 2 && (
                    <p>• Es para todos los comerciantes o tenderos de México preseleccionados, pero puedes llamar al número 800-9531-858 para solicitar tu crédito.</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
