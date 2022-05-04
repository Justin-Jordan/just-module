<?php

namespace Drupal\just_mod\Plugin\Layout\Sections;

use Drupal\Core\Layout\LayoutDefault;
use Drupal\formatage_models\FormatageModelsThemes;
use Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "plumbing_help_section",
 *   label = @Translation("Plumbing help section"),
 *   category = @Translation("Plumbing Layout"),
 *   path = "layouts/sections",
 *   template = "plumbing_help_section",
 *   library = "just_mod/plumbing_help_section",
 * regions = {
 *     "title" = {
 *       "label" = @Translation("Main title"),
 *     },
 *     "subTitle" = {
 *       "label" = @Translation("sub title")
 *     },
 *     "descriptionTitle" = {
 *       "label" = @Translation("description title")
 *     },
 *     "description" = {
 *       "label" = @Translation("description")
 *     },
 *     "callToAction" = {
 *       "label" = @Translation("Call to action")
 *     }
 *   }
 * )
 */
class PlumbingHelpSection extends FormatageModelsSection
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
              'value' => "Plumbing Problem?"
            ]
          ],
          'subTitle' => [
            'text' => [
              'label' => 'Sub title',
              'value' => "We can help you"
            ]
          ],
          'descriptionTitle' => [
            'text' => [
              'label' => 'Description Title',
              'value' => "Professional Plumbing, Leak and Heating Services"
            ]
          ],
          'descriptionTitle' => [
            'text_html' => [
              'label' => 'Description',
              'value' => '
                  <p>Whether you’re planning a renovation or simply need routine maintenance
                              on your home or
                              office plumbing systems, our
                              professional technicians and mechanics can assist you effectively in the right way.</p>
                  '
            ]
          ],
          'callToAction' => [
            'url' => [
              'label' => 'Call action',
              'value' => [
                'link' => '#',
                'text' => 'request a plomber',
              ]
            ]
          ]
        ]
      ]
    ];
  }
}
