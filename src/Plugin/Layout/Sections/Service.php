<?php

namespace Drupal\just_mod\Plugin\Layout\Sections;

use Drupal\Core\Layout\LayoutDefault;
use Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "just_mod",
 *   label = @Translation("Plumbing service section"),
 *   category = @Translation("Plumbing Layout"),
 *   path = "layouts/sections",
 *   template = "service",
 *   library = "just_mod/service",
 * )
 */
class Service extends FormatageModelsSection
{
    /**
     *
     * {@inheritdoc}
     */
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
                    'main' => [
                        'text_html' => [
                            'label' => 'description',
                            'value' => "Enfin, vos travaux de rénovation simples et sans surprise !"
                        ]
                    ]
                ]
            ]
        ];
    }
}
