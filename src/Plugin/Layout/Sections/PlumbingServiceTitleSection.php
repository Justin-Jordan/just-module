<?php

namespace Drupal\just_mod\Plugin\Layout\Sections;

use Drupal\Core\Layout\LayoutDefault;
use Drupal\formatage_models\FormatageModelsThemes;
use Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "plumbing_service_title_section",
 *   label = @Translation("Plumbing service title section"),
 *   category = @Translation("Plumbing Layout"),
 *   path = "layouts/sections",
 *   template = "plumbing_service_section_title",
 *   library = "just_mod/plumbing_service",
 *   regions = {
 *     "title" = {
 *       "label" = @Translation("Service title"),
 *     },
 *     "subTitle" = {
 *       "label" = @Translation("Service subtitle")
 *     },
 *   }
 * )
 */
class PlumbingServiceTitleSection extends FormatageModelsSection
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
                'value' => "our services"
              ]
            ],
            'descrtiption' => [
              'text_html' => [
                'label' => 'Sub title',
                'value' => '<p class="card-text">
                No job is too large for us! Commercial properties need professional plumbersin any case…</p>'
              ]
            ],
          ]
        ]
      ];
    }
}
