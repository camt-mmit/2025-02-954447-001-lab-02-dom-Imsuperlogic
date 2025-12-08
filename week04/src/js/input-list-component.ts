/**
 * Create input-list component.
 *
 * @param {HTMLElement} componentElem
 *
 * @returns {HTMLElement}
 */
export function createComponent(componentElem: HTMLElement) {
  const sectionTemplate = componentElem.querySelector('.app-tmp-section');
  const mainContainer = componentElem.querySelector('.app-cmp-main-container');

  if (sectionTemplate === null) {
    throw new Error('Template .app-tmp-section is not found');
  }
  if (mainContainer === null) {
    throw new Error('Main container .app-cmp-main-container is not found');
  }

  const regenerateSectionTitlesAndStatus = () => {
    const sections = mainContainer.querySelectorAll('.app-cmp-section');

    sections.forEach((section, index) => {
      const title = section.querySelector('.app-title-section');
      if (title) title.textContent = `${index + 1}`;

      const removeBtn = section.querySelector(
        '.app-cmd-remove-section',
      ) as HTMLButtonElement;

      if (removeBtn) removeBtn.disabled = sections.length === 1;
    });
  };

  const createSectionComponent = () => {
    // แก้จุด cloneNode (1)
    const sectionContainer = (
      (sectionTemplate as HTMLTemplateElement).content.cloneNode(
        true,
      ) as DocumentFragment
    ).firstElementChild as HTMLElement;

    const numberTemplate = sectionContainer.querySelector(
      '.app-tmp-number-component',
    );
    const inputListContainer = sectionContainer.querySelector(
      '.app-cmp-number-list',
    );

    if (!numberTemplate || !inputListContainer) {
      throw new Error('Inner template or container not found inside section');
    }

    const regenerateNumberTitlesAndStatus = () => {
      const inputItems = [
        ...inputListContainer.querySelectorAll('.app-cmp-number'),
      ];

      inputItems.forEach((inputContainer, index) => {
        const title = inputContainer.querySelector('.app-title-number');
        if (title) title.textContent = `${index + 1}`;

        const removeBtn = inputContainer.querySelector(
          '.app-cmd-remove-number-input',
        );
        if (removeBtn) {
          (removeBtn as HTMLButtonElement).disabled = inputItems.length === 1;
        }
      });
    };

    const recalculateResult = () => {
      const result = [
        ...inputListContainer.querySelectorAll('.app-inp-number'),
      ].reduce(
        (result, elem) =>
          result +
          (Number.isNaN((elem as HTMLInputElement).valueAsNumber)
            ? 0
            : (elem as HTMLInputElement).valueAsNumber),
        0,
      );

      [...sectionContainer.querySelectorAll('.app-out-number')].forEach(
        (elem) => (elem.textContent = result.toLocaleString()),
      );
    };

    const createInputComponent = () => {
      // แก้จุด cloneNode (2)
      const inputContainer = (
        (numberTemplate as HTMLTemplateElement).content.cloneNode(
          true,
        ) as DocumentFragment
      ).firstElementChild as HTMLElement;

      inputContainer.addEventListener('click', (ev) => {
        if (
          (ev.target as Element)?.matches('.app-cmd-remove-number-input') ??
          false
        ) {
          inputContainer.remove();
          regenerateNumberTitlesAndStatus();
          recalculateResult();
        }
      });

      inputListContainer.append(inputContainer);
      regenerateNumberTitlesAndStatus();
      recalculateResult();
    };

    inputListContainer.addEventListener('change', (ev) => {
      if ((ev.target as Element)?.matches('.app-inp-number') ?? false) {
        recalculateResult();
      }
    });

    sectionContainer.addEventListener('click', (ev) => {
      if ((ev.target as Element)?.matches('.app-cmd-add-number-input')) {
        createInputComponent();
      }

      if ((ev.target as Element)?.matches('.app-cmd-remove-section')) {
        sectionContainer.remove();
        regenerateSectionTitlesAndStatus();
      }
    });

    createInputComponent();

    mainContainer.append(sectionContainer);
    regenerateSectionTitlesAndStatus();
  };

  componentElem.addEventListener('click', (ev) => {
    if ((ev.target as Element)?.matches('.app-cmd-add-section')) {
      createSectionComponent();
    }
  });

  createSectionComponent();

  return componentElem;
}
