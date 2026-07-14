import { Experience } from '../../shared/models/experience.model';

export const EDUCATION: readonly Experience[] = [
  {
    role: $localize`:@@education.unisenai.role:Tecnólogo em Análise e Desenvolvimento de Sistemas`,
    organization: 'UniSENAI Santa Catarina',
    startDate: $localize`:@@education.unisenai.startDate:Fev 2026`,
    endDate: $localize`:@@education.unisenai.endDate:Jun 2028`,
    isOngoing: true,
    type: 'education',
    description: $localize`:@@education.unisenai.description:Cursando Tecnólogo em ADS, com foco em desenvolvimento de aplicações web, APIs REST e integração de sistemas.`,
    highlights: [
      $localize`:@@education.unisenai.highlight1:Desenvolvimento de projetos práticos focados em aplicações web e integração de sistemas`,
      $localize`:@@education.unisenai.highlight2:Aprofundamento em backend, frontend, bancos de dados e boas práticas de desenvolvimento`,
      $localize`:@@education.unisenai.highlight3:Evolução contínua em arquitetura de software e tecnologias voltadas a cloud`,
    ],
  },
  {
    role: $localize`:@@education.unicesumar.role:Técnico em Análise e Desenvolvimento de Sistemas`,
    organization: 'UniCesumar',
    startDate: $localize`:@@education.unicesumar.startDate:Fev 2024`,
    endDate: $localize`:@@education.unicesumar.endDate:Ago 2025`,
    isOngoing: false,
    type: 'education',
    description: $localize`:@@education.unicesumar.description:Curso de Tecnologia em Análise e Desenvolvimento de Sistemas concluído, com formação em backend, frontend, bancos de dados, arquitetura, DevOps, testes, segurança e metodologias ágeis.`,
    highlights: [
      $localize`:@@education.unicesumar.highlight1:Projeto, desenvolvimento e manutenção de sistemas`,
      $localize`:@@education.unicesumar.highlight2:Programação, bancos de dados e arquitetura de software`,
      $localize`:@@education.unicesumar.highlight3:Segurança da informação e metodologias ágeis aplicadas a soluções reais`,
    ],
  },
];

export const EDUCATION_CURRENT_LABEL = $localize`:@@education.currentLabel:Atual`;
export const EDUCATION_IN_PROGRESS_LABEL = $localize`:@@education.inProgressLabel:Em andamento`;
export const EDUCATION_COMPLETED_LABEL = $localize`:@@education.completedLabel:Concluído`;
