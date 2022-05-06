<?php

namespace Drupal\just_mod\Plugin\Layout\Sections;

use Drupal\Core\Layout\LayoutDefault;
use Drupal\formatage_models\FormatageModelsThemes;
use Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "f_news_finance_section",
 *   label = @Translation("f news finance section"),
 *   category = @Translation("f news Layout"),
 *   path = "layouts/sections",
 *   template = "f_news_finance",
 *   library = "just_mod/f_news_finance",
 *   regions = {
 *     "mainTitle" = {
 *       "label" = @Translation("maintitle")
 *     },
 *     "date" = {
 *       "label" = @Translation("Date of the post")
 *     },
 *     "title" = {
 *       "label" = @Translation("title of the post")
 *     },
 *     "description" = {
 *       "label" = @Translation("Description of the post")
 *     },
 *     "authorImage" = {
 *       "label" = @Translation("The image of the author")
 *     },
 *     "authorRole" = {
 *       "label" = @Translation("the role of the author")
 *     },
 *     "more" = {
 *       "label" = @Translation("redirect the user if they want more information")
 *     },
 *   }
 * )
 */
class FNewsFinance extends FormatageModelsSection
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
                    'mainTitle' => [
                      'text' => [
                        'label' => 'Main Title',
                        'value' => "finance"
                      ]
                    ],
                    'date' => [
                        'text' => [
                            'label' => 'Title',
                            'value' => "Apr 30, 2020"
                        ]
                    ],
                    'title' => [
                        'url' => [
                            'label' => 'title',
                            'value' => [
                                'link' => '#',
                                'text' => 'Stunning photos of our universe',
                                'class' => 'link'
                            ]
                        ]
                    ],
                    'description' => [
                        'text_html' => [
                            'label' => 'description',
                            'value' => "<p>
                            A tellus risus dis. Orci sagittis sociosqu senectus est facilisis est facilisis neque rutrum
                            dapibus!
                        </p>"
                        ]
                    ],
                    'authorImage' => [
                        'text_html' => [
                            'label' => 'author image',
                            'value' => "<img class=\"img\"
                            src=\"https://demo.morethanthemes.com/flashyplus-news8/default/sites/default/files/styles/thumbnail/public/pictures/2019-08/avatar_0.jpg?itok=QV437nlh\"
                            alt=\"\">"
                        ]
                    ],
                    'authorRole' => [
                        'text' => [
                            'label' => 'Author role',
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
