<?php

namespace Drupal\just_mod\Plugin\Layout\Sections;

use Drupal\Core\Layout\LayoutDefault;
use Drupal\formatage_models\FormatageModelsThemes;
use Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "plumbing_service_section",
 *   label = @Translation("Plumbing service section"),
 *   category = @Translation("Plumbing Layout"),
 *   path = "layouts/sections",
 *   template = "plumbing_service",
 *   library = "just_mod/plumbing_service",
 *   regions = {
 *     "title" = {
 *       "label" = @Translation("title of the service")
 *     },
 *     "description" = {
 *       "label" = @Translation("Description of the service")
 *     },
 *     "readmore" = {
 *       "label" = @Translation("read more about the service")
 *     },
 *   }
 * )
 */
class PlumbingService extends FormatageModelsSection
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
                'value' => "commercial Services "
              ]
            ],
            'description' => [
              'text_html' => [
                'label' => 'description',
                'value' => "<p>
                No job is too large for us! Commercial properties need professional plumbers
                                                          in any case…</p>"
              ]
            ],
            'readmore' => [
                'url' => [
                    'label' => 'read more',
                    'value' => [
                        'link' => '#',
                        'text' => 'request a plomber',
                        'class' => 'btn lm-btn lm-btn-noir'
                    ]
                ]
            ]
          ]
        ]
      ];
    }
}
