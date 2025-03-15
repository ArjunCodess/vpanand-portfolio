import { type SchemaTypeDefinition, Rule as RuleType } from 'sanity'

// Import data for defaults
import {
  NAV_ITEMS,
  PROFILE_DATA,
  HERO_IMAGE,
  HEADLINE_DATA,
  ABOUT_DATA,
  COURSES_DATA,
  FEATURED_VIDEOS,
  PUBLICATIONS_DATA,
  EDUCATION_DATA,
  INDUSTRY_KNOWLEDGE,
  EXPERIENCE_DATA,
  COPYRIGHT_TEXT
} from '@/lib/data'

// Schema types based on data.ts structures
const navItem = {
  name: 'navItem',
  title: 'Navigation Item',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: RuleType) => Rule.required(),
      initialValue: NAV_ITEMS[0].name,
    },
    {
      name: 'id',
      title: 'ID',
      type: 'string',
      validation: (Rule: RuleType) => Rule.required(),
      initialValue: NAV_ITEMS[0].id,
    },
  ],
}

const profile = {
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: RuleType) => Rule.required(),
      initialValue: PROFILE_DATA.name,
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: RuleType) => Rule.required(),
      initialValue: PROFILE_DATA.title,
    },
    {
      name: 'fullTitle',
      title: 'Full Title',
      type: 'text',
      initialValue: PROFILE_DATA.fullTitle,
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      initialValue: PROFILE_DATA.email,
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}

const heroImage = {
  name: 'heroImage',
  title: 'Hero Image',
  type: 'document',
  fields: [
    {
      name: 'src',
      title: 'Source',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: RuleType) => Rule.required(),
    },
    {
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      validation: (Rule: RuleType) => Rule.required(),
      initialValue: HERO_IMAGE.alt,
    },
    {
      name: 'width',
      title: 'Width',
      type: 'number',
      initialValue: HERO_IMAGE.width,
    },
    {
      name: 'height',
      title: 'Height',
      type: 'number',
      initialValue: HERO_IMAGE.height,
    },
  ],
}

const headline = {
  name: 'headline',
  title: 'Headline',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'text',
      validation: (Rule: RuleType) => Rule.required(),
      initialValue: HEADLINE_DATA.title,
    },
    {
      name: 'contactLink',
      title: 'Contact Link',
      type: 'string',
      initialValue: HEADLINE_DATA.contactLink,
    },
    {
      name: 'contactText',
      title: 'Contact Text',
      type: 'string',
      initialValue: HEADLINE_DATA.contactText,
    },
    {
      name: 'workLink',
      title: 'Work Link',
      type: 'string',
      initialValue: HEADLINE_DATA.workLink,
    },
    {
      name: 'workText',
      title: 'Work Text',
      type: 'string',
      initialValue: HEADLINE_DATA.workText,
    },
  ],
}

const about = {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      validation: (Rule: RuleType) => Rule.required(),
      initialValue: ABOUT_DATA.shortDescription,
    },
    {
      name: 'longDescription',
      title: 'Long Description',
      type: 'array',
      of: [{ type: 'text' }],
      initialValue: ABOUT_DATA.longDescription,
    },
  ],
}

const course = {
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: RuleType) => Rule.required(),
      initialValue: COURSES_DATA[0].title,
    },
    {
      name: 'institution',
      title: 'Institution',
      type: 'string',
      validation: (Rule: RuleType) => Rule.required(),
      initialValue: COURSES_DATA[0].institution,
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      initialValue: COURSES_DATA[0].location,
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      initialValue: COURSES_DATA[0].icon,
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
      options: {
        list: [
          {title: 'Red', value: 'red'},
          {title: 'Orange', value: 'orange'},
          {title: 'Yellow', value: 'yellow'},
          {title: 'Green', value: 'green'},
          {title: 'Teal', value: 'teal'},
          {title: 'Blue', value: 'blue'},
          {title: 'Indigo', value: 'indigo'},
          {title: 'Purple', value: 'purple'},
          {title: 'Pink', value: 'pink'},
          {title: 'Cyan', value: 'cyan'},
        ]
      },
    },
  ],
}

const featuredVideo = {
  name: 'featuredVideo',
  title: 'Featured Video',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: RuleType) => Rule.required(),
      initialValue: FEATURED_VIDEOS[0].title,
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      initialValue: FEATURED_VIDEOS[0].description,
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      validation: (Rule: RuleType) => Rule.required(),
      initialValue: FEATURED_VIDEOS[0].link,
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'views',
      title: 'Views',
      type: 'string',
      initialValue: FEATURED_VIDEOS[0].views,
    },
    {
      name: 'platform',
      title: 'Platform',
      type: 'string',
      initialValue: FEATURED_VIDEOS[0].platform,
    },
  ],
}

const publication = {
  name: 'publication',
  title: 'Publication',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: RuleType) => Rule.required(),
      initialValue: PUBLICATIONS_DATA[0].title,
    },
    {
      name: 'publisher',
      title: 'Publisher',
      type: 'string',
      initialValue: PUBLICATIONS_DATA[0].publisher || '',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      initialValue: PUBLICATIONS_DATA[0].url,
    },
    {
      name: 'date',
      title: 'Date',
      type: 'string',
      initialValue: PUBLICATIONS_DATA[0].date,
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      initialValue: PUBLICATIONS_DATA[0].icon,
    },
    {
      name: 'iconColor',
      title: 'Icon Color',
      type: 'string',
      description: 'Use simplified color name without shade (e.g., "red" instead of "red-500")',
      initialValue: 'red',
      options: {
        list: [
          {title: 'Red', value: 'red'},
          {title: 'Orange', value: 'orange'},
          {title: 'Yellow', value: 'yellow'},
          {title: 'Green', value: 'green'},
          {title: 'Teal', value: 'teal'},
          {title: 'Blue', value: 'blue'},
          {title: 'Indigo', value: 'indigo'},
          {title: 'Purple', value: 'purple'},
          {title: 'Pink', value: 'pink'},
          {title: 'Cyan', value: 'cyan'},
        ]
      },
    },
  ],
}

const education = {
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: 'degree',
      title: 'Degree',
      type: 'string',
      validation: (Rule: RuleType) => Rule.required(),
      initialValue: EDUCATION_DATA[0].degree,
    },
    {
      name: 'institution',
      title: 'Institution',
      type: 'string',
      validation: (Rule: RuleType) => Rule.required(),
      initialValue: EDUCATION_DATA[0].institution,
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      initialValue: EDUCATION_DATA[0].description,
    },
    {
      name: 'period',
      title: 'Period',
      type: 'string',
      initialValue: EDUCATION_DATA[0].period,
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
      description: 'Use simplified color name without shade (e.g., "purple" instead of "purple-500")',
      initialValue: 'purple',
      options: {
        list: [
          {title: 'Red', value: 'red'},
          {title: 'Orange', value: 'orange'},
          {title: 'Yellow', value: 'yellow'},
          {title: 'Green', value: 'green'},
          {title: 'Teal', value: 'teal'},
          {title: 'Blue', value: 'blue'},
          {title: 'Indigo', value: 'indigo'},
          {title: 'Purple', value: 'purple'},
          {title: 'Pink', value: 'pink'},
          {title: 'Cyan', value: 'cyan'},
        ]
      },
    },
  ],
}

const skillCategory = {
  name: 'skillCategory',
  title: 'Skill Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: RuleType) => Rule.required(),
      initialValue: 'Industry Knowledge',
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule: RuleType) => Rule.required(),
      initialValue: INDUSTRY_KNOWLEDGE,
    },
  ],
}

const experience = {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: RuleType) => Rule.required(),
      initialValue: EXPERIENCE_DATA[0].title,
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule: RuleType) => Rule.required(),
      initialValue: EXPERIENCE_DATA[0].company,
    },
    {
      name: 'period',
      title: 'Period',
      type: 'string',
      initialValue: EXPERIENCE_DATA[0].period,
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
      description: 'Use simplified color name without shade (e.g., "red" instead of "red-500")',
      initialValue: 'red',
      options: {
        list: [
          {title: 'Red', value: 'red'},
          {title: 'Orange', value: 'orange'},
          {title: 'Yellow', value: 'yellow'},
          {title: 'Green', value: 'green'},
          {title: 'Teal', value: 'teal'},
          {title: 'Blue', value: 'blue'},
          {title: 'Indigo', value: 'indigo'},
          {title: 'Purple', value: 'purple'},
          {title: 'Pink', value: 'pink'},
          {title: 'Cyan', value: 'cyan'},
        ]
      },
    },
  ],
}

const siteSettings = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'navigation',
      title: 'Navigation',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'navItem' }] }],
    },
    {
      name: 'footerLinks',
      title: 'Footer Links',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'navItem' }] }],
    },
    {
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
      initialValue: COPYRIGHT_TEXT,
    },
  ],
}

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    navItem,
    profile,
    heroImage,
    headline,
    about,
    course,
    featuredVideo,
    publication,
    education,
    skillCategory,
    experience,
    siteSettings,
  ],
}