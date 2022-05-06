<?php

namespace Drupal\just_mod\Plugin\Layout\Sections;

use Drupal\Core\Layout\LayoutDefault;
use Drupal\formatage_models\FormatageModelsThemes;
use Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "f_news_featured_section",
 *   label = @Translation("f news featured section"),
 *   category = @Translation("f news Layout"),
 *   path = "layouts/sections",
 *   template = "f-news-featured-section",
 *   library = "just_mod/f-news-featured",
 *   regions = {
 *     "title" = {
 *       "label" = @Translation("title")
 *     },
 *     "subTitle" = {
 *       "label" = @Translation("subTitle")
 *     },
 *     "image" = {
 *       "label" = @Translation("image")
 *     },
 *     "pubInfo" = {
 *       "label" = @Translation("pubInfo")
 *     },
 *     "descriptor" = {
 *       "label" = @Translation("descriptor")
 *     },
 *     "authorRole" = {
 *       "label" = @Translation("authorRole")
 *     },
 *     "more" = {
 *       "label" = @Translation("redirect the user if they want more information")
 *     },
 *   }
 * )
 */
class FNewsFeatured extends FormatageModelsSection
{
    public function build(array $regions)
    {
        $build = parent::build($regions);
        FormatageModelsThemes::formatSettingValues($build);
        return $build;
    }

    public function defaultConfiguration()
    {
        return parent::defaultConfiguration() + [
            'sf' => [
                'builder-form' => true,
                'info' => [
                    'title' => 'Contenu',
                    'loader' => 'static'
                ],
                'fields' => [
                    'title' => [
                      'text' => [
                        'label' => 'Title',
                        'value' => "Featured"
                      ]
                    ],
                    'subTitle' => [
                        'text' => [
                            'label' => 'Title',
                            'value' => "Read our latest news and announcements"
                        ]
                    ],
                    'image' => [
                        'text_html' => [
                            'label' => 'image',
                            'value' => "<a href=\"#\" class=\"img-sup\"><img class=\"card-img\"
                            src=\"https://demo.morethanthemes.com/flashyplus-news8/default/sites/default/files/styles/mt_large/public/2020-04/mt-post-13.jpg?itok=9yJYiqQt\"
                            alt=\"\"></a>"
                        ]
                    ],
                    'pubInfo' => [
                      'text' => [
                        'label' => 'pubInfo',
                        'value' => "Apr 30, 2020 / Health"
                      ]
                    ],
                    'descriptor' => [
                        'url' => [
                            'label' => 'descriptor',
                            'value' => [
                                'link' => '#',
                                'text' => 'Things that can help to boost your immune system',
                            ]
                        ]
                    ],
                    'authorRole' => [
                        'text' => [
                            'label' => 'authorRole',
                            'value' => "Admin"
                        ]
                    ],
                    'more' => [
                        'url' => [
                            'label' => 'redirect the user if they want more information',
                            'value' => [
                                'link' => '#',
                                'text' => 'More',
                                'class' => 'link'
                            ]
                        ]
                    ],
                ]
            ]
        ];
    }
}
